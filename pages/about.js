import ImageWithBlur from '@/components/ImageWithBlur';
import Layout from '@/components/Layout';

export default function Products() {
  return (
    <Layout
      title='Metanoia | Về chúng mình'
      description='METANOIA - Thời trang dành cho plus-sized và curvy, váy, đầm, áo và hơn nữa'
    >
      <div className='min-h-screen w-full px-5 xs:px-10 mt-20 mb-6'>
        <div className='flex flex-col justify-center items-center max-w-lg mx-auto'>
          <div className='relative pb-1/1 w-full'>
            <ImageWithBlur
              image={{
                src: '/metanoia.jpg',
                blurhash: 'L5P?mqt7~WxaxafQt7fQ~pj[4oay',
              }}
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className='text-left w-full space-y-4'>
            <h2 className='text-3xl lg:text-4xl font-dancingScript mt-5'>
              Our Story
            </h2>
            <p>
              "Ngay từ khi bắt đầu nhận thức được sự quan trọng của diện mạo,
              chúng mình đều khó tránh khỏi việc o ép bản thân theo một tiêu
              chuẩn nào đó của xã hội. Đối với những cô nàng đầy đặn, tiêu chuẩn
              đó dường như luôn là “gầy hơn”, “thon thả hơn”.
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
              Vì định kiến không thể làm nàng hạnh phúc.
            </p>
            <p>
              Hạnh phúc là tự thưởng cho mình một chút ngọt ngào của chiếc bánh
              macaron, hay nhâm nhi 1 ly champagne dưới ánh đèn ảo diệu. Hạnh
              phúc là không phải che giấu dưới lớp quần áo thùng thình. Hạnh
              phúc là khi nàng cảm thấy tự hào về chính cơ thể của mình. Hãy lựa
              chọn, và đầu tư vào những gì xứng đáng, phù hợp nhất với bản thân,
              và vóc dáng. Quan trọng hơn cả là nàng luôn thấy tự tin là chính
              mình và cảm thấy thoải mái với những gì nàng đang mặc.
            </p>
            <p>
              METANOIA đã ra đời dựa trên tinh thần đó. Là một nơi để các nàng
              được tự do trải nghiệm & hưởng thụ. Hơn hết là mỗi một sản phẩm
              đều gửi gắm sự tỉ mỉ, tôn trọng nét đẹp tự nhiên của chính chúng
              mình.
            </p>
            <h2>
              Hãy để METANOIA được vinh hạnh cùng đồng hành với các nàng trên
              chặng đường xây dựng sự tự tin và toả sáng hơn nữa trong thời gian
              tới nhé"
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}
