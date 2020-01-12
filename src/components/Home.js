import React, { Fragment, useState } from "react";
import axios from "axios";
import "../StyleSheets/Home.css";

// class Home extends React.Component {

const Home = () => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("Choose File");
    const [uploadedFile, setUploadedFile] = useState({});
    const [text, setText] = useState("");

    const onChange = e => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", file);

        try {
            const res = await axios.post(
                "http://localhost:8080/imageApi/postImage",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            const { fileName, filePath } = res.data;
            setUploadedFile({ fileName, filePath });
            console.log(res.data);
            setText(res.data);
        } catch (err) {
            // if(err.response.status === 500) {
            //     console.log('There was a problem with the server');
            // }else {
            //     console.log(err.response.data.msg);
            // }
            console.log("wrong input");
        }
    };

    return (
        <div>
            <br />
            <div className="box">
                <form onSubmit={onSubmit}>
                    <input
                        type="file"
                        className="upload"
                        accept="image/*"
                        id="Home"
                        onChange={onChange}
                    />
                    <br />
                    <button type="submit">Upload</button>
                    <h2>{text}</h2>
                </form>
            </div>

            <br />
            <br />

            <div className="text">
                <textarea name="text" id="text" cols="50" rows="10"></textarea>
            </div>
        </div>
    );
};

export default Home;
