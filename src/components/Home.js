import React from "react";
import '../StyleSheets/Home.css';

class Home extends React.Component {

    render() {

        return (
            <div>
                <br/>
                <div className="box">
                    <form action="#">
                        <input type="file" className="upload" accept="image/*" id="myImageInput"/>
                        <input type="button" onclick="document.getElementById('myImageInput').click()"
                               value="Upload an Image >" className="btn btn-primary btn-block btn-lg"/>
                    </form>
                </div>

                <br/>
                <br/>

                <div className="text">
                    <textarea name="text" id="text" cols="50" rows="10"></textarea>
                </div>
            </div>
        );

    }

}

export default Home;