function desenhaGraficos(){

    var tabela = new google.visualization.DataTable();

    tabela.addColumn('string','categorias');
    tabela.addColumn('number', 'valores');
    tabela.addRows([
        ['Educação',2000],
        ['Transporte',500],
        ['Lazer',230],
        ['Saúde',50],
        ['Cartão de crédito',900],
        ['Alimentação',260]
    ]);	

    var opcoes = {
        title:'Tipos de Gastos',
        height: 400,
        width: 800,
        is3D: true,
        legend: 'labeled',
        slices: { 
            0: {}, 
            1: {color: 'gray'}, 
            2: {color: '#a6a6a6'},
            3: {color: 'gray'},
            4: {offset: 0.3},
            5: {color: 'gray'}
        }
        //colors: ['gray', 'red','yellow', 'blue', 'pink', 'purple']
    };

    var grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));
    grafico.draw(tabela, opcoes);	

    tabela = new google.visualization.DataTable();

    tabela.addColumn('string', 'Mês');
    tabela.addColumn('number', 'Gastos');
    tabela.addRows(
        [
            ['jan', 800],
            ['fev', 400],
            ['mar', 1100],
            ['abr', 400],
            ['mai', 500],
            ['jun', 750],
            ['ago', 650],
            ['set', 850],
            ['out', 400],
            ['nov', 1000],
            ['dez', 750]
        ]
    )

    var opcoes = {
        title: 'Gastos por mês',
        width: 650,
        height: 300,
        vAxis: {
            format: 'currency', 
            gridlines: {
                count: 5, 
                color: 'transparent'
            }

        },
        curveType: 'function',
        legend: 'none'
    }
    var grafico = new google.visualization.LineChart(document.getElementById('graficoLinha'));
    grafico.draw(tabela, opcoes);

    var tabela = new google.visualization.arrayToDataTable(  
        [
            ['Mês', 'Entrada', 'Saída'],
            ['jan', 2500, 1000],
            ['fev', 2000, 500],
            ['mar', 3000, 1300],
            ['abr', 1500, 1700],
            ['mai', 5000, 2250],
            ['jun', 3567, 3000],
            ['jul', 3452, 1468],
            ['ago', 1833, 5250],
            ['set', 3803, 5500],
            ['out', 1800, 1000],
            ['nov', 3569, 1500],
            ['dez', 3000, 1740]
        ]
    );

    var opcoes = {
        title: 'Entradas e saídas da conta',
        width: 800,
        height: 400,
        vAxis: { 
            gridlines: { color: 'transparent' },
            format: 'currency',
            title: 'Valores' 
        },
        hAxis: { 
            title: 'Mês' 
        }
    }

    var grafico = new google.visualization.ColumnChart(document.getElementById('graficoColuna'));
    grafico.draw(tabela, opcoes);


    //colunas surpresa

    var dadosJson = $.ajax({
        url: 'dadosGraficoBarra.json',
        dataType: 'json',
        async: false
    }).responseText;

    var tabela = new google.visualization.DataTable(dadosJson);

    tabela.sort([{ column: 1, desc: true }]);

    var opcoes = {

        title: 'Tipos de Gastos',
        height: 400,
        width: 800,
        vAxis: {
             gridlines: {color: 'transparent', count: 0}
        },
        legend: 'none',
        hAxis: {
            gridlines: { color: 'transparent' } ,
            format: 'currency',
            textPosition: 'none'
        },
        annotations: {alwaysOutside: true}

    }

    var grafico = new google.visualization.BarChart(document.getElementById('graficoBarras'))
    grafico.draw(tabela, opcoes)

    var dadosJson = $.ajax({
        url: 'dados.json',
        dataType: 'json',
        async: false
    }).responseText;

    var tabela = new google.visualization.DataTable(dadosJson);

    tabela.sort([{ column: 1, desc: true }]);

    var opcoes = {
        title: 'Usuários e Poupanças',
        height: 400,
        width: 800,
        legend: 'none',
        hAxis: {
            gridlines: {color: 'transparent'},
            textPosition: 'none'
        },
        annotations: {
            alwaysOutside: true
        }
    }

    var grafico = new google.visualization.BarChart(document.getElementById('graficoBarrasJson'));
    grafico.draw(tabela, opcoes);


}