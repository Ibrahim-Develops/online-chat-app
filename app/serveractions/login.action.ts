// 'use server'


// const login = async (formData: { email: string; password: string }) => {
//   try {
//     const result = await signIn('credentials', {
//       redirect: false,
//       callbackUrl: '/',
//       email: formData.email,
//       password: formData.password,
//     })

//     if (result?.error) {
//       return { error: result.error }
//     }

//     return { error: null }
//   } catch (error: any) {
//     return { error: error?.message || 'An unknown error occurred.' }
//   }
// }

// export { login }
