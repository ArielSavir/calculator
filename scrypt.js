$("#submit").click(function (e) {
    e.preventDefault();
    let what = $("#what").val();
    let many = $("#many").val();
    let who = $("#who").val();
    let where = $("#where").val();


    if (what == 0 || many == 0 || who == 0 || where == 0) {
        alert("נא להלשים את כל הפרטים! ");
    } else {
        if (where == 4) {
            alert("שלח ציק! או שתכין 'חבילה'")
        } else {
            if (what == 5) {
                let msg = "את/ה לא צריך לתת מתנה.\n ה-" + $("#who  option:selected").text() + " במילא יקבל ירושה!";
                alert(msg);
            } else {
                let calc = (what * 2 + many * 2 + who * 6 + where * 3) * 20;

                $("#totaltip").text(calc);
                $("#showResult").css({
                    display: 'flex'
                })
            }
        }
    }
});
