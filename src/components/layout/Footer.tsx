export function Footer() {
    return (
        <footer className="w-full border-t bg-slate-50 py-10 text-slate-600">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                <p className="text-sm">
                    Copyright &copy; {new Date().getFullYear()} NEVADO. Todos los derechos reservados.
                </p>
                <div className="flex gap-4 text-sm font-medium">
                    <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
                    <a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a>
                </div>
            </div>
        </footer>
    );
}
