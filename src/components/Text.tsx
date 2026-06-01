import "@fontsource/archivo/300.css";
import "@fontsource/archivo/300-italic.css";







export default function Hero() {
  return (
    <section className="w-full overflow-hidden bg-white mt-10 mb-20">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 lg:pt-20">

        {/* Hero Heading */}
        <div className="text-center">
          <h1 className="font-semibold tracking-[-0.06em] leading-[0.9] text-black">
            <span className="block text-[40px] sm:text-[70px] md:text-[80px] lg:text-[95px]">
              Look like you've
            </span>

            <span className="block">
              <span
                className="italic font-normal tracking-[-0.06em] text-black text-[38px] sm:text-[50px] md:text-[68px] lg:text-[90px]"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                }}
              >
                already
              </span>

              <span className="ml-2 text-[#FF1616] font-extrabold tracking-[-0.06em] text-[42px] sm:text-[56px] md:text-[80px] lg:text-[110px]">
                won.
              </span>
            </span>
          </h1>
        </div>

        

      </div>
    </section>
  );
}