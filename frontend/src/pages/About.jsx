import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className=' my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className=' flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem im vitae tempora et dol dolor quasi ipsam molestiae? Temum repudiandae.</p>
          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet dolor nulla incidunt quae nesciunt, ipsam voluptatum. Est corrupti, eius corporis, aperiam excepturi iusto beatae atque provident nobis, nesciunt sit molestiae explicabo qui illo reprehenderit aliquid assumenda maiores veniam? Distinctio consequuntur consectetur non repellat nulla velit recusandae fuga dolore voluptatem, unde numquam asperiores molestiae iusto officia eos fugiat omnis saepe pariatur sint blanditiis et cumque aspernatur! Sequi est explicabo inventore deserunt excepturi autem reiciendis eum quis, nostrum a quibusdam ratione ad distinctio doloribus, voluptatum eos, alias corporis. Recusandae neque, sint cumque, sapiente rerum voluptatum quisquam architecto animi nemo aliquam, nam ab.</p>
          <b className=' text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore assumenda debitis qui eveniet distinctio. Maxime vitae nisi ab modi delectus deserunt nemo in soluta provident corrupti, eaque laborum aliquam tempora natus? Labore, possimus ratione.</p>
        </div>
      </div>

      <div className=' text-xl py-4'>
        <Title text1={'WEY'} text2={"CHOOSE US"} />
      </div>

      <div className=' flex flex-col md:flex-row text-sm mb-20'>
          <div className=' border px-10 md:py-20 flex flex-col gap-5'>
              <b>Quality Assurace:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore laborum voluptas quaerat voluptatum et dolor a veniam omnis quas? Non tenetur nesciunt nam magnam optio odio provident, facere, quidem praesentium blanditiis id, repellendus quas!</p>
          </div>
          <div className=' border px-10 md:py-20 flex flex-col gap-5'>
              <b>Convenience::</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore laborum voluptas quaerat voluptatum et dolor a veniam omnis quas? Non tenetur nesciunt nam magnam optio odio provident, facere, quidem praesentium blanditiis id, repellendus quas!</p>
          </div>
          <div className=' border px-10 md:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service::</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore laborum voluptas quaerat voluptatum et dolor a veniam omnis quas? Non tenetur nesciunt nam magnam optio odio provident, facere, quidem praesentium blanditiis id, repellendus quas!</p>
          </div>
      </div>

      <NewsLetterBox/>

    </div>
  )
}

export default About
