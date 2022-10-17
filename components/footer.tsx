import Link from "next/link";

export default function Footer(){
    return (
        <footer className="bg-slate-700 p-4">
            <div className="flex justify-around items-center max-w-4xl mx-auto mb-4 ">
                <Link href='#'><a className="w-8 h-8 transition-all hover:scale-110">
                    <img src='/icons/naver.png' />    
                </a></Link>
                <Link href='#'><a className="w-8 h-8  transition-all hover:scale-110">
                    <img src='/icons/kakao.png' />    
                </a></Link>
                <Link href='#'><a className="w-8 h-8 transition-all hover:scale-110">
                    <img src='/icons/insta.png' />    
                </a></Link>
            </div>
            <hr/>
            <div className="grid grid-cols-3 lg:grid-cols-6 max-w-4xl mx-auto my-4 text-left">
                    <Link href='#'><a className="text-xs font-semibold lg:font-medium text-gray-300 hover:text-primary">
                        <p>비급여안내</p>    
                    </a></Link>
                    <Link href='#'><a className="text-xs font-semibold lg:font-medium text-gray-300 hover:text-primary">
                        <p>개인정보처리방침</p>    
                    </a></Link>
                    <Link href='#'><a className="text-xs font-semibold lg:font-medium text-gray-300 hover:text-primary">
                        <p>채용정보</p>    
                    </a></Link>
                    <Link href='#'><a className="text-xs font-semibold lg:font-medium text-gray-300 hover:text-primary">
                    <p>환자권리장전</p>    
                    </a></Link>
                    <Link href='#'><a className="text-xs font-semibold lg:font-medium text-gray-300 hover:text-primary">
                        <p>병원윤리강령</p>    
                    </a></Link>
                    <Link href='#'><a className="text-xs font-semibold lg:font-medium text-gray-300 hover:text-primary">
                        <p>이메일무단수집거부</p>    
                    </a></Link>
            </div>
            <hr/>
            <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2 mt-4">
                <div>
                    <p>
                        <Link href="/"><a  className="flex items-center">
                            <span className="self-center text-xl font-semibold text-secondary whitespace-nowrap">
                                프라임<span className="text-primary">병원</span>
                            </span>
                            </a>
                        </Link>
                    </p>
                    <p className="text-sm text-gray-300">대표상담번호 <span className="text-lg font-semibold text-primary ml-1">051-202-7800</span></p>
                    <p className="text-sm text-gray-300">평 일 : 09:00 ~ 18:00 (점심 12:30 ~ 13:30)</p>
                    <p className="text-sm text-gray-300">토요일 : 09:00 ~ 13:00 일요일 : 휴 진  </p>              
                </div>
                <div className="text-sm text-gray-300">
                    <p>부산광역시 사하구 낙동남로 1410 프라임병원</p>      
                    <p>1410, Nakdongnam-ro, Saha-gu</p>
                    <p>Busan, Republic of Korea</p>          
                    <p>프라임병원 최봉식 사업자등록번호 603-90-26381</p>
                    <p>Tel. 051-202-7800 ㅣ Fax. 051-208-2439</p>
                    <p>Copyright ⓒ 2022 Prime Hospital. ALL RIGHTS RESERVED. Design By.Sukbong</p>
                </div>
            </div>  
        </footer>
    )
}