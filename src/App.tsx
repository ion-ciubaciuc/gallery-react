import { Gallery } from "./gallery";

import pictureOne from "./assets/picture_1.jpg";
import pictureTwo from "./assets/picture_2.jpg";
import pictureThree from "./assets/picture_3.jpg";

const App = () => {
    return (
        <div className="m-auto w-fit p-8">
            <Gallery
                items={[
                    {
                        src: pictureOne,
                    },
                    {
                        src: pictureTwo,
                    },
                    {
                        src: pictureThree,
                    },
                ]}
            />
        </div>
    );
};

export default App;
