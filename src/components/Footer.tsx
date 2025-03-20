

const Footer = () => {
  return (
    <div className='w-full'>
      <div className='bg-black text-white flex justify-around gap-5 pb-5 pt-10 flex-wrap'>
        <div className='border-2 border-[#0796EF] p-5 rounded-2xl w-60 flex justify-center items-center flex-col'>
            <p>CONNECT WITH US</p>
            <div>
                <p>+91 9567843340</p>
            </div>
            <div>
                <p>info@deepnetsoft.com</p>
            </div>
        </div>
        <div className='border-2 border-[#0796EF] p-5 rounded-2xl w-60 flex justify-center items-center flex-col'>
            <img src="/Logo.png" alt="" />
            <div>
                <span>DEEP</span>
                <span>NET</span>
                <span>SOFT</span>
            </div>
            <div>

            </div>
        </div>
        <div className='border-2 border-[#0796EF] p-5 rounded-2xl w-60 flex justify-center items-center flex-col'>
            <p>FIND US</p>
            <div>
                <p>
                    First floor, Geo infopark, Infopark EXPY, Kakkanad
                </p>
            </div>
        </div>
      </div>
      <div className='flex gap-10 justify-around px-10 text-[#857878] bg-[#161616]'>
        <p> {String.fromCharCode(169)} 2024 Deepnetsoft Solutions. All right reserved.</p>
        <p>Terms & Conditions  Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer
