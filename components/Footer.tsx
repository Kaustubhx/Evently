import Image from 'next/image'
import Link from 'next/link'

type Props = {}

function Footer({ }: Props) {
    return (
        <footer className='border-t'>
            <div className='flex-center warpper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
                <Link
                    href={"/"}
                >
                    <Image
                        src={"/assets/images/logo.svg"}
                        height={38}
                        width={128}
                        alt='logo'
                    />
                </Link>

                <p>{new Date().getFullYear()} Evently. All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer