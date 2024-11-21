import React from "react";
import LearningImage from "../../assets/Frame 30.svg";
import uzeyir from "../../assets/uzeyir.svg";
import muslim from "../../assets/muslim.svg";

const Learning = () => {
  return (
    <div>
      <div className="relative">
        <div className="container max-w-[1440px] mx-auto">
          <img
            src={LearningImage}
            alt="LearningImage"
            className="w-full h-[703px] object-cover"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-start text-white p-4 bg-black bg-opacity-50">
          <div className="container max-w-[1226px] mx-auto">
            <h2 className="font-medium text-sm leading-[16px] font-sf-pro text-left  sm:w-[583px] sm:h-[73px] sm:text-xl sm:leading-[30px] sm:p-2">
              The foundation of Opera art in Azerbaijan was laid on January 12
              (25), 1908, with the performance of "Leyli and Majnun", the first
              opera in the Eastern and Muslim world by genius Uzeyir Hajibeyli,
              at the H.Z. Taghiyev Theater. The theater building was built in
              1910 by the famous builder-engineer Bayev.
            </h2>
          </div>
        </div>
      </div>

      <div className="container max-w-[1320px] m-auto mt-[58px]">
        <div className="flex items-center text-center justify-center">
          <h2 className="font-bold text-[52px] leading-[71px] font-sf-pro">
            Notable Faces
          </h2>
        </div>

        <div className="flex flex-wrap justify-between mt-[48px] ">
          {/* Uzeyir */}
          <div className="w-[472px] items-center flex flex-col mb-8">
            <div className="mb-[38px]">
              <img src={uzeyir} alt="uzeyir" className="w-full" />
            </div>
            <div>
              <p className="font-bold text-sm leading-[21px] flex text-center">
                Uzeyir bey Abdulhuseyn bey oglu Hajibeyli (September 18, 1885,
                Aghjabedi, Shusha district - November 23, 1948, Baku)
                Azerbaijani, Soviet composer, conductor, musicologist,
                publicist, pedagogue, public figure. People's Artist of the USSR
                (1938). Winner of two "Stalin" awards of the II degree (1941,
                1946). Cavalier of the Order of "Lenin" (1938).
              </p>
            </div>
          </div>

          {/* Muslim */}
          <div className="w-[472px] items-center flex flex-col mb-8 ">
            <div className="mb-[38px]">
              <img src={muslim} alt="muslim" className="w-full" />
            </div>
            <div>
              <p className="font-bold text-sm leading-[21px] flex text-center">
                Abdulmuslum Mahammad oglu Magomayev (September 18, 1885, Grozny
                - July 28, 1937, Nalchik) — Azerbaijani composer, conductor,
                pedagogue, folklorist, public figure, one of the founders of
                Azerbaijani classical music, the author of the first
                European-style opera named after Muslim Magomayev. He is the
                grandfather of singer Muslim Magomayev.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
