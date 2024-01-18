import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import NavItems from "./NavItems"


type Props = {}

function MobileNav({ }: Props) {
    return (
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger className="align-middle">
                    <Image
                        src={"/assets/icons/menu.svg"}
                        alt=""
                        height={24}
                        width={24}
                        className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
                    <Image
                        src={"/assets/images/logo.svg"}
                        alt="logo"
                        width={128}
                        height={128}
                    />
                    <Separator className="border border-gray-50" />
                    <NavItems />
                    
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default MobileNav