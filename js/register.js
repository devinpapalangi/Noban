var currentTab = 0;
showTab(currentTab); 

function showTab(n) 
{
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    if (n == 0) 
    {
        document.getElementById("prevBtn").style.display = "none";
        document.getElementById("nextBtn").style.width = "100%";
    } 

    else 
    {
        document.getElementById("prevBtn").style.display = "inline";
        document.getElementById("prevBtn").style.width = "45%";
        document.getElementById("nextBtn").style.width = "45%";
    }

    if (n == (x.length - 1)) 
    {
        document.getElementById("nextBtn").innerHTML = "Submit";
    }

    else 
    {
        document.getElementById("nextBtn").innerHTML = "Next";
    }

    fixStepIndicator(n)
}

function nextPrev(n) 
{

    var x = document.getElementsByClassName("tab");
    
    if (n == 1 && !validateForm()) 
    {
        return false;
    }
   
    if(n == 1 && !validateform())
    {
        return false;
    } 
    
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;

    if (currentTab >= x.length) 
    {
        $("#registerForm").submit();
        return false;
    }

    showTab(currentTab);
}

function validateForm() 
{
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    for (i = 0; i < y.length; i++) 
    {
        if (y[i].value == "") 
        {
            y[i].className += " invalid";

            valid = false;
        }
    }

    if (valid) 
    {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }

    return valid;
}

function fixStepIndicator(n) 
{
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
    }
    x[n].className += " active";
}

function validateform() {
    var password = document.getElementById("Password").value;
    var confirmPassword = document.getElementById("ConfirmPassword").value;

    if(password != confirmPassword) {
        // alert("Password does not match. Please try again!");
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Password does not match. Please try again!',
          })
        return false;
    }
    return true;
}