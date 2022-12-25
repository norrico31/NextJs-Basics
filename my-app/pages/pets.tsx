import Img from 'next/image'
import img1 from '/public/img/1.jpg'

// blurDataUrl for dynamic images

export default function pets() {
    return (
        <div>
            <Img src={img1} alt='sample photos' placeholder='blur' width='280' height='480' />
            {['1', '2', '3'].map(path => (
                <div key={path}>
                    <Img src={`/img/${path}.jpg`} blurDataURL='' alt={path} width='280' height='480' />
                </div>
            ))}
        </div>
    )
}
