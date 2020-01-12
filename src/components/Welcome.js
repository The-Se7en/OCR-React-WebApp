import React from "react";
import '../StyleSheets/Home.css';

class Welcome extends React.Component {

    render() {

        return (
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="box">
                    <p>
                        <h3> Use Optical Character Recognition software online. Service supports 50 languages including English and Tamil.</h3>
                    </p>
                    <p> Interface: English</p>
                    <p> Recognition: Afrikaans, Albanian, Arabic, Azerbaijani, Basque, Belarusian, Bengali, Bulgarian, Catalan, Czech, Cherokee, Croatian, Danish, Dutch, English, Esperanto, Estonian, Finnish, French, Galician, German, Greek, Hindi, Hungarian, Indonesian, Italian, Japanese, Kannada, Korean, Latvian, Lithuanian, Malayalam, Macedonian, Maltese, Malay, Norwegian, Polish, Portuguese, Romanian, Russian, Serbian, Slovak, Slovenian, Spanish, Swahili, Swedish, Tagalog, Tamil, Telugu, Thai, Turkish, Ukrainian & Vietnamese</p>
                </div>

            </div>
        );

    }

}

export default Welcome;