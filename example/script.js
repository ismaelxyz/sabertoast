document.querySelector(".success-btn").addEventListener('click', () => {
    saberToast.success({
        title: "The operation was successful",
        text: "The product has been added to the basket",
        delay: 200,
        duration: 2600,
        rtl: true,
        position: "top-left"
    })
})

document.querySelector(".error-btn").addEventListener('click', () => {
    saberToast.error({
        title: "Something went wrong",
        text: "Please try again",
        delay: 200,
        duration: 2600,
        rtl: true,
        position: "bottom-right"
    })
})

document.querySelector(".warn-btn").addEventListener('click', () => {
    saberToast.warn({
        title: "Something went as expected",
        text: "Please check everything",
        duration: 2600,
        rtl: true,
        position: "bottom-right"
    })
})

document.querySelector(".info-btn").addEventListener('click', () => {
    saberToast.info({
        title: "Welcome",
        text: "You are running saber-toast",
        delay: 200,
        duration: 2600,
        rtl: true,
        position: "bottom-right"
    })
})