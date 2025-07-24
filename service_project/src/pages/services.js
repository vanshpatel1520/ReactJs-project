import React, { useEffect, useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:1520/api/getservices")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  function bookservice(id, price) {
    var merchant_order_id = "123";

    const options = {
      key: "rzp_test_60v2W0km5tB9fH",
      amount: price * 100,
      currency: "INR",
      name: "IT",
      description: "Booking for service",
      prefill: {
        name: "Taanya Patel",
        email: "taanya@gmail.com",
        contact: 9898984141,
      },
      notes: {
        soolegal_order_id: "123",
      },
      handler: function (response) {
        console.log("Payment successful:", response);
        Axios.post("http://localhost:1520/api/booking", {
          sid: id,
          price: price,
          email: "taanya@gmail.com",
        })
          .then((response) => {
            alert(response.data.message || "Booking successful");
            window.location = "/Login";
          })
          .catch((err) => {
            console.error("Booking error:", err);
            alert("Booking failed after payment.");
          });

        Swal.fire({
          title: "Success!",
          text: "Booking completed!",
          icon: "success",
          confirmButtonText: "OK",
        });
      },
      modal: {
        ondismiss: function () {
          alert("Payment popup closed without completing payment.");
        },
      },
      theme: {
        color: "#528FF0",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  }

  const styles = {
    section: {
      padding: "60px 0",
      backgroundColor: "#fff",
    },
    container: {
      maxWidth: "1140px",
      margin: "0 auto",
      padding: "0 15px",
    },
    heading: {
      textAlign: "center",
      marginBottom: "50px",
    },
    row: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "30px",
    },
    box: {
      width: "45%",
      backgroundColor: "#f8f9fa",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
    imgBox: {
      width: "100%",
      height: "250px",
      overflow: "hidden",
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    detailBox: {
      padding: "20px",
    },
    h6: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#111",
    },
    p: {
      fontSize: "15px",
      color: "#333",
      minHeight: "60px",
    },
    extraInfo: {
      fontSize: "14px",
      color: "#666",
      marginTop: "10px",
    },
    readMore: {
      display: "inline-block",
      marginTop: "10px",
      padding: "8px 20px",
      backgroundColor: "#A2FF86",
      color: "#000",
      borderRadius: "5px",
      textDecoration: "none",
      fontWeight: "bold",
    },
  };

  return (
    <>
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.heading}>
            <h2>Our Services</h2>
          </div>
          <div style={styles.row}>
            {services.map((service) => (
              <div style={styles.box} key={service.id}>
                <div style={styles.imgBox}>
                  <img
                    src={`http://localhost:1520/public/${service.image}`}
                    alt={service["service-name"]}
                    style={styles.img}
                  />
                </div>
                <div style={styles.detailBox}>
                  <h6 style={styles.h6}>{service["service-name"]}</h6>
                  <p style={styles.p}>{service.description}</p>
                  <div style={styles.extraInfo}>
                    <strong>Price:</strong> ₹{service.price} <br />
                    <strong>City:</strong> {service.city}
                  </div>
                  <button
                    type="button"
                    onClick={() => bookservice(service.id, service.price)}
                  >
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
