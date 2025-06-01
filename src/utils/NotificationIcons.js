import { E_Wallet, PaymentSuccessful, ParkingBookingCanceled, two_stepverification } from '../assets/icons'

export const NotificationIcons = (status) => {
    var icon_name = E_Wallet

    if (status === "Successful") {
        icon_name = PaymentSuccessful
    } else if (status === "Canceled") {
        icon_name = ParkingBookingCanceled
    } else if (status === "Verification") {
        icon_name = PaymentSuccessful
    } else if (status === "Wallet") {
        icon_name = E_Wallet
    } else if (status === "Tow_Step_Verification") {
        icon_name = two_stepverification
    }

    return icon_name
}