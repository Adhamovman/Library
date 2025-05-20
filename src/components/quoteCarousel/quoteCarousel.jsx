import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const data = [
    {
        author: "MAHMUDXO'JA BEHBUDIY",
        quote: "Har bir musulmon o'g'li va qizi ilm olishga majburdir.",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Bekhbudi.jpg"
    },
    {
        author: "Abdulla Avloniy",
        quote: "Ta'lim — millatni uyg'otadigan qudratdir.”",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Abdulla_Avloniy.jpg/250px-Abdulla_Avloniy.jpg"
    },
    {
        author: "Munavvarqori Abdurashidxonov",
        quote: "Ilm yo'li og'ir, lekin uning mevasi shirindir.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Munavvar_qori_Abdurashidxonov.jpg/250px-Munavvar_qori_Abdurashidxonov.jpg"
    },
    {
        author: "Fitrat",
        quote: "Ilmsiz kishi o'zini boshqara olmaydi, jamiyatni esa hech qachon.",
        img: "https://corp.uzairways.com/sites/default/files/inline-images/photo_2020-12-25_12-08-37.jpg"
    }
];

export default function QuoteCarousel({ cardBg, cardBorder, textColor }) {

    return (
        <div className="w-full mx-auto my-6"   >
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000 }}
                loop={true}
                spaceBetween={20}
                slidesPerView={1}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="p-6 rounded-xl flex flex-col-reverse md:flex-row items-center text-left justify-evenly gap-4"
                            style={{ backgroundColor: cardBg, borderColor: cardBorder, color: textColor, borderWidth: '1px', borderStyle: 'solid' }}
                        >
                            <div className="flex flex-col gap-2 max-w-xl">
                                <p className="text-xl italic leading-relaxed">“{item.quote}”</p>
                                <p className="text-lg text-center font-semibold dark:text-gray-300 mt-2">{item.author}</p>
                            </div>
                            <img
                                src={item.img}
                                alt={item.author}
                                className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full border-4 border-gray-300 shadow-lg"
                            />

                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
