import AuthForm from '../../components/AuthForm'
import MainLayout from '../../layouts/MainLayout'

const RegisterPage = () => {
  return (
    <MainLayout>
      <AuthForm mode="register" />
    </MainLayout>
  )
}

export default RegisterPage
