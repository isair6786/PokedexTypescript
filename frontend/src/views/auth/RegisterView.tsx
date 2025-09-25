import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { schemaRegisterValidate, TRegisterForm } from "../../schemas/formSchemas";
import ErrorMessage from "../../components/ErrorMessage";

export default function RegisterView() {
    const { register, handleSubmit, formState: { errors,touchedFields  } } = useForm<TRegisterForm>({
        resolver: zodResolver(schemaRegisterValidate),
    });

    const onSubmit = handleSubmit((data) => console.log(data))

    return (
        <>

            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
                    <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

                    <form onSubmit={onSubmit}>
                        
                        <input
                            placeholder="Username"
                            {...register("username")}
                            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none mt-5
                            ${errors.username ? "border-red-500" : !touchedFields.username? "border-gray-300":"border-green-300"} `}
                        />
                        {errors.username?<ErrorMessage>{errors.username.message}</ErrorMessage>:null}

                         <input
                            placeholder="contoso@contoso.com"
                            {...register("email")}
                            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none mt-5
                            ${errors.email ? "border-red-500" : !touchedFields.email? "border-gray-300":"border-green-300"} `}
                        />
                        {errors.email?<ErrorMessage>{errors.email.message}</ErrorMessage>:null}

                         <input
                            placeholder="Password"
                            type="password"
                            {...register("password")}
                            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none mt-5
                            ${errors.password ? "border-red-500" :!touchedFields.password? "border-gray-300":"border-green-300"} `}
                        />
                        {errors.password?<ErrorMessage>{errors.password.message}</ErrorMessage>:null}

                          <input
                            placeholder="Confirm Password"
                            type="password"
                            {...register("confirmPassword")}
                            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none  mt-5
                            ${errors.confirmPassword ? "border-red-500" :!touchedFields.confirmPassword? "border-gray-300":"border-green-300"} `}
                        />
                        {errors.confirmPassword?<ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>:null}

                        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition mt-5">
                            Register
                        </button>
                    </form>

                    <p className="text-sm text-gray-600 mt-4 text-center">
                        Already have an account?{" "}
                        <Link to="/auth/login" className="text-blue-600 hover:underline">Login</Link>
                    </p>
                </div>
            </div>
        </>
    );
}
