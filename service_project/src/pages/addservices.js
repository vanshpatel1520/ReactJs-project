import React, { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

const AddServices = () => {
  const [serviceName, setServiceName] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("service_name", serviceName);
    formData.append("description", description);
    formData.append("city", city);
    formData.append("price", price);
    formData.append("image", image);

    Axios.post("http://localhost:1520/api/addservice", formData)
      .then((res) => {
        Swal.fire("Success", "Service added successfully", "success");
        // Clear form
        setServiceName("");
        setDescription("");
        setCity("");
        setPrice("");
        setImage(null);
      })
      .catch((err) => {
        Swal.fire("Error", "Failed to add service", "error");
      });
  };

  return (
    <section
      className="contact_section layout_padding d-flex align-items-center"
      style={{ minHeight: "100vh", position: "relative" }}
    >
      <div className="contact_bg_box">
        <img
          src="images/contact-bg.jpg"
          alt=""
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "-1",
          }}
        />
      </div>

      <div className="container">
        <div className="heading_container heading_center mb-4">
          <h2>Add New Service</h2>
          <div
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: "#A2FF86",
              margin: "0 auto",
            }}
          />
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="form_container text-center">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Service Name"
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Description"
                    rows="3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Service Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group mb-4">
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                  />
                </div>

                <div className="btn-box">
                  <button className="btn btn-success" type="submit">
                    Add Service
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddServices;
