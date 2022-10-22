import type { NextPage } from 'next'

import Layout from '@components/layout'
import Testimonial from '@components/testimonial'
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Input from '@components/input';

interface BookingForm {
    name : string;
    phone: number;
}

const Booking: NextPage = () => {
    const router = useRouter();
    const { register, handleSubmit } = useForm<BookingForm>();

    const onValid = async ({} : BookingForm ) => {

    }

    return (
        <Layout>
            <div className='flex flex-col max-w-xl mx-auto'>
                <h1 className='text-3xl text-center my-12'>진료 예약하기</h1>
                <form className="p-4 space-y-8" onSubmit={handleSubmit(onValid)}>
                    <Input register={register('name', { required: true })} required label="이름" 
                    placeholder='성함을 입력해주세요'
                    name="name" type="text" />

                    <Input register={register('phone', { required: true })} required placeholder='전화번호를 - 없이 입력해주세요'
                    label="전화번호" name="phone" type="number" />
                    <Input register={register('phone', { required: true })} required placeholder='전화번호를 - 없이 입력해주세요'
                    label="전화번호" name="phone" type="date" />
                </form>
            </div>
        </Layout>
    )
}

export default Booking
