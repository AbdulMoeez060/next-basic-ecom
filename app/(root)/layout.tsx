import Navbar from "@/components/Navbar";




export default async function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (

        <div className="w-full flex flex-col items-start justify-start">
            <Navbar />
            {children}
        </div>

    );
}
