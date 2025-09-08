import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { schemaLoginValidate, TLoginForm } from "../../schemas/formSchemas";
import { zodResolver } from '@hookform/resolvers/zod';
import ErrorMessage from "../../components/ErrorMessage";

export default function LoginView() {
    const { register,
        handleSubmit,
        formState: { errors, touchedFields }, } = useForm<TLoginForm>({
            resolver: zodResolver(schemaLoginValidate)
        })
    const onSubmit = handleSubmit((data) => console.log(data))
    return (<>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Welcome!!!!</h2>

                <form onSubmit={onSubmit}>
                    <input
                        placeholder="contoso@contoso.com"
                        type="email"
                        {...register("email")}
                        className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none mt-5
                                    ${errors.email ? "border-red-500" : !touchedFields.email ? "border-gray-300" : "border-green-300"} `}
                    />
                    {errors.email ? <ErrorMessage>{errors.email.message}</ErrorMessage> : null}

                    <input
                        placeholder="Password"
                        type="password"
                        {...register("password")}
                        className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none mt-5
                            ${errors.password ? "border-red-500" : !touchedFields.password ? "border-gray-300" : "border-green-300"} `}
                    />
                    {errors.password ? <ErrorMessage>{errors.password.message}</ErrorMessage> : null}

                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg mt-5 hover:bg-blue-700 transition">
                        Login
                    </button>
                </form>

                <p className="text-sm text-gray-600 mt-4 text-center">
                    Don’t have an account?{" "}
                    <Link to="/auth/register" className="text-blue-600 hover:underline">Register</Link>
                </p>
            </div>
        </div>
    </>)
}