import { useForm, SubmitHandler, FieldError } from 'react-hook-form';
import axios from 'axios';

interface UserFormData {
    firstName: string;
    lastName: string;
    jobTitle: string;
    company: string;
    mobileNumber: string;
    emailAddress: string;
    companyWebsiteUrl: string;
    privacyPolicy: boolean;
}

function SectionSeven() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<UserFormData>();

    // const onSubmit: SubmitHandler<UserFormData> = async (data) => {
    //     try {
    //         const response = await axios.post('http://localhost:5038/api/users', data);
    //         if (response.status === 200) {
    //             reset();
    //             alert('Registration successful');
    //         }
    //     } catch (error) {
    //         console.error('Error submitting form:', error);
    //         alert('Something went wrong, please try again');
    //     }
    // };

    const onSubmit: SubmitHandler<UserFormData> = async (data) => {
        const { privacyPolicy, ...dataToSend } = data;
    
        try {
            const response = await axios.post('http://localhost:5038/api/user', dataToSend);
            if (response.status === 200) {
                reset(); 
                alert('Registration successful');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Something went wrong, please try again');
        }
    };
    

    return (
        <section id="register" className="w-full bg-gradient-to-br from-[#9d174d] via-[#d946ef] to-[#f0abfc] py-20 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2 flex items-center justify-center text-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl text-gray-100">Register Now</h2>
                        <p className="text-lg text-gray-100 mt-4">Join us for an unforgettable experience!</p>
                    </div>
                </div>

                <div className="md:w-1/2 bg-gradient-to-b from-[#4a4949] to-[#939393] rounded-xl p-8 shadow-lg w-full">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-100"
                            {...register('firstName', { required: 'First Name is required' })}
                        />
                        {errors.firstName && <p className="text-red-500 text-sm">{(errors.firstName as FieldError).message}</p>}

                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-100"
                            {...register('lastName', { required: 'Last Name is required' })}
                        />
                        {errors.lastName && <p className="text-red-500 text-sm">{(errors.lastName as FieldError).message}</p>}

                        <input
                            type="text"
                            placeholder="Job Title"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-100"
                            {...register('jobTitle', { required: 'Job Title is required' })}
                        />
                        {errors.jobTitle && <p className="text-red-500 text-sm">{(errors.jobTitle as FieldError).message}</p>}

                        <input
                            type="text"
                            placeholder="Company"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-100"
                            {...register('company', { required: 'Company is required' })}
                        />
                        {errors.company && <p className="text-red-500 text-sm">{(errors.company as FieldError).message}</p>}

                        <input
                            type="text"
                            placeholder="Mobile Number"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-100"
                            {...register('mobileNumber', { required: 'Mobile Number is required' })}
                        />
                        {errors.mobileNumber && <p className="text-red-500 text-sm">{(errors.mobileNumber as FieldError).message}</p>}

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-100"
                            {...register('emailAddress', { required: 'Email Address is required' })}
                        />
                        {errors.emailAddress && <p className="text-red-500 text-sm">{(errors.emailAddress as FieldError).message}</p>}

                        <input
                            type="url"
                            placeholder="Company Website URL"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-100"
                            {...register('companyWebsiteUrl', { required: 'Company Website URL is required' })}
                        />
                        {errors.companyWebsiteUrl && <p className="text-red-500 text-sm">{(errors.companyWebsiteUrl as FieldError).message}</p>}

                        <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" {...register('privacyPolicy', { required: 'You must agree to the privacy policy' })} />
                            <p className="text-sm text-gray-100">
                                By filling out the registration form to attend our event, you agree and consent to{' '}
                                <a
                                    href="https://cogentsolutions.ae/privacy-policy"
                                    className="text-[#c834a4]"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Cogent Solutions Privacy Policy
                                </a>.
                            </p>
                        </div>
                        {errors.privacyPolicy && <p className="text-red-500 text-sm">{(errors.privacyPolicy as FieldError).message}</p>}

                        <button
                            type="submit"
                            className="w-full text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                            style={{ backgroundColor: '#c834a4' }}
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default SectionSeven;
