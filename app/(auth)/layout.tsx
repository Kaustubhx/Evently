
type Props = {
    children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
            {children}
        </div>
    )
}