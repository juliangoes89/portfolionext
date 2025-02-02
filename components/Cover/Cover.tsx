import Image from 'next/image';

export const Cover = ({children, background }: { key: any, children?: React.ReactNode, background:string }) => {
    return (
    <div className="h-screen bg-slate-800 relative min-h-[400] flex justify-center items-center">
        <Image src={background} 
        alt="Background Cover Image" 
        fill  
        className='mix-blend-soft-light object-cover' />
        <div className='max-w-5xl z-10'>
            {children? children : null}
        </div>
    </div>
    );
};