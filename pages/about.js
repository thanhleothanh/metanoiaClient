import ImageWithBlur from '@/components/ImageWithBlur';
import Layout from '@/components/Layout';

export default function Products() {
  return (
    <Layout
      title='Metanoia | Về chúng mình'
      description='METANOIA - Thời trang dành cho plus-sized và curvy, váy, đầm, áo và hơn nữa'
    >
      <div className='relative w-full min-h-screen px-5 mt-16 mb-6 md:mt-20 2xl:mt-24 3xl:mt-28 xs:px-10 paddingInsetTop'>
        <div className='flex flex-col items-center justify-center max-w-2xl mx-auto 2xl:max-w-3xl'>
          <div className='relative w-full pb-2/3'>
            <ImageWithBlur
              image={{
                src: '/metanoia.jpg',
                blurhash: 'L5P?mqt7~WxaxafQt7fQ~pj[4oay',
              }}
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className='w-full space-y-1 text-justify 3xl:space-y-2'>
            <h2 className='mt-5 mb-3 text-3xl 3xl:mb-5 lg:text-4xl 2xl:text-5xl 3xl:text-6xl font-dancingScript'>
              Our Story
            </h2>
            <div className='space-y-1 text-justify xl:text-lg 2xl:text-2xl'>
              <p>
                "Ngay từ khi bắt đầu nhận thức được sự quan trọng của diện mạo,
                chúng mình đều khó tránh khỏi việc o ép bản thân theo một tiêu
                chuẩn nào đó của xã hội. Đối với những cô nàng đầy đặn, tiêu
                chuẩn đó dường như luôn là “gầy hơn”, “thon thả hơn”.
              </p>
              <p>
                Chúng mình nhận lấy những lời khuyên nhủ và chỉ trích, đếm từng
                calo mỗi sáng và mỗi tối. Nhưng rồi cũng chính áp lực từ tiêu
                chuẩn đó, khiến chúng mình cảm thấy không bao giờ đủ xinh đẹp và
                tự tin với một cơ thể đầy đặn.
              </p>
              <p>Hãy cùng METANOIA thay đổi suy nghĩ đó được không ?</p>
              <p>
                Nàng không cần chạy theo những tiêu chuẩn, định kiến của xã hội.
                Vì định kiến không thể làm nàng hạnh phúc. Hạnh phúc là tự
                thưởng cho mình một chút ngọt ngào của chiếc bánh macaron, hay
                nhâm nhi 1 ly champagne dưới ánh đèn ảo diệu. Hạnh phúc là không
                phải che giấu dưới lớp quần áo thùng thình. Hạnh phúc là khi
                nàng cảm thấy tự hào về chính cơ thể của mình. Hãy lựa chọn, và
                đầu tư vào những gì xứng đáng, phù hợp nhất với bản thân, và vóc
                dáng. Quan trọng hơn cả là nàng luôn thấy tự tin là chính mình
                và cảm thấy thoải mái với những gì nàng đang mặc.
              </p>
              <p>
                METANOIA đã ra đời dựa trên tinh thần đó. Là một nơi để các nàng
                được tự do trải nghiệm & hưởng thụ. Hơn hết là mỗi một sản phẩm
                đều gửi gắm sự tỉ mỉ, tôn trọng nét đẹp tự nhiên của chính chúng
                mình.
              </p>
              <p>
                Hãy để METANOIA được vinh hạnh cùng đồng hành với các nàng trên
                chặng đường xây dựng sự tự tin và toả sáng hơn nữa trong thời
                gian tới nhé"
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
