import AnimatedBackground from "@/components/layouts/AnimatedBackground";
import Navbar from "@/components/layouts/Navbar";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/index";


function App() {

    return (
        <AuthProvider>
            <AnimatedBackground/>
            <Navbar />
            <div className="relative ...">
                <AppRoutes />
            </div>
        </AuthProvider>
    );
}

export default App;
