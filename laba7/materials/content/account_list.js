let Publisher_author = [
	{
		"fio" : "Семенков Павел Юрьевич",
		"log" : "@Pavel25565",
		"podpischik_list" : "22",
		"podpiski_list" : "7",
        "zapisi_list" : "2",
	},
    {
		"fio" : "Сухоруков Сергей ",
		"log" : "@Serdj3478",
		"podpischik_list" : "7",
		"podpiski_list" : "12",
        "zapisi_list" : "2",
    },
    {
		"fio" : "Цветков Андрей Александрович",
		"log" : "@Andrey2345",
		"podpischik_list" : "15",
		"podpiski_list" : "8",
        "zapisi_list" : "2",
    }
];

function addOPT (){
    let Select = document.getElementById("vibor");
    console.log("work")

    Publisher_author.forEach(el =>{
        let iteam = document.createElement("option");
        iteam.value = el.log;
        iteam.innerHTML = el.fio;

        Select.appendChild(iteam);
    });
};

addOPT();