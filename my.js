$(document).ready(function(){
    let typePapper = {
        "Выберите бумагу": 0,
        "Мелованная бумага": 6.8,
        "Бумага повышенной белизны (SPLENDORGEL)": 40.5,
        "Prestige Лен":45 
    };
    let typeColor = {
        "Выберите цветность": {file:0, print:0},
        "Односторонняя черно-белая": {file:110, print:14},
        "Двусторонняя черно-белая": {file:220, print:28},
        "Односторонняя цветная": {file:110, print:37},
        "Цветная с лицевой, ч/б с оборотной": {file:220, print:51},
        "Двусторонняя цветная": {file:220, print:74}
    };
    inserPapper();
    function inserPapper(){
        let html="";
        for (type in typePapper)
            html += '<option value = "'+type+'">'+type+"</option>";
            $("#card-paper").append(html);
    }
    inserСolor();
    function inserСolor(){
        let html="";
        for (color in typeColor)
            html += '<option value = "'+color+'">'+color+"</option>";
            $("#card-color").append(html);
    }
    $(".calk").change(function(){
        tirSize=$("#card-quantity").val()/30;
        
        // alert(tirSize);
        pricePapper = typePapper[$("#card-paper").val()]*tirSize;
        
        color_format=$("#card-color").val();
        priceForma = typeColor[color_format]["file"];
        pricePrint = typeColor[color_format]["print"] * tirSize;
        sum = pricePapper + priceForma + pricePrint;
        old_color_format = color_format;
        $("#final_price").text(sum);
        
        if (color_format = old_color_format){
            $("img").hide();
            if (color_format=="Односторонняя черно-белая") 
                $("#card_1_0").show("slow");  
            if (color_format=="Двусторонняя черно-белая") 
                $("#card_1_1").show("slow"); 
            if (color_format=="Односторонняя цветная") 
                $("#card_4_0").show("slow"); 
            if (color_format=="Цветная с лицевой, ч/б с оборотной") 
                $("#card_4_1").show("slow"); 
            if (color_format== "Двусторонняя цветная") 
                $("#card_4_4").show("slow"); 
        }

    });
    

});