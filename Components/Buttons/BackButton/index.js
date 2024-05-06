import { useRouter } from 'next/router'; 
import Image from 'next/image';

export default function BackButton() {
    const router = useRouter(); 

    return (
        <button onClick={() => router.back()} style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
        }}>
            <Image
                src="/./public/img/backbutton.png"
                alt="return to previous page"
                width={50} 
                height={50} 
            />
        </button>
    );
}
