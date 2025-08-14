<template>
  <Head>
    <Title>Kin long | Home</Title>
  </Head>
  <div>
    <form>
      <div class="flex grid">
        <div class="grid-col">
          <div class="block">
            <p>Наименование</p>
            <input type="text" placeholder="Введите наименование" name="name"/>
          </div>
        </div>
        <div class="grid-col">
          <div class="block">
            <p>Ширина створки</p>
            <input type="text" placeholder="Введите ширину" name="width"/>
          </div>
        </div>
        <div class="grid-col">
          <div class="block">
            <p>Высота створки</p>
            <input type="text" placeholder="Введите высоту" name="height"/>
          </div>
        </div>
        <div class="grid-col">
          <div class="block">
            <p>Петли</p>
            <select>
              <option value="visible">Видимые</option>
              <option value="hidden">Скрытые</option>
            </select>
          </div>
        </div>
        <div class="grid-col">
          <div class="block">
            <p>Тип фурнитуры</p>
            <select id="fur-type">
              <option value="fur-1">Поворотно-откидная</option>
              <option value="fur-2">Поворотная</option>
              <option value="fur-3">Откидная</option>
              <option value="fur-4">Штульп</option>
              <option value="fur-5">Подъемно-раздвижная</option>
              <option value="fur-6">Гармошка</option>
            </select>
          </div>
        </div>
        <div class="grid-col">
          <div class="block">
            <p>Открывание створки</p>
            <select id="open-type">
              <option value="open-right">Правое</option>
              <option value="open-left">Левое</option>
            </select>
          </div>
        </div>
        <div class="grid-col">
          <div class="block">
            <p>Форма ручки</p>
            <select id="form-type">
              <option value="form-1">Вилка</option>
              <option value="form-2">Безрозеточная</option>
            </select>
          </div>
        </div>
        <div class="grid-col">
          <div class="block">
            <p>Количество</p>
            <input type="number" placeholder="Введите количество" name="number"/>
          </div>
        </div>
      </div>
      <div class="flex btn-container">
<!--        <button id="getResult">Рассчитать</button>-->
        <span role="button" id="getResult" class="btn" @click="getResult">Рассчитать</span>
      </div>
    </form>

<!--    <br>-->
<!--    <h2>DataBase:</h2>-->
<!--    <br>-->
    <details>
      <summary>{{showBase ? 'Hide' : 'Show'}} DataBase</summary>
      <br>
      <div v-for="table in dataBase2" :key="table.type">
        <h3 v-html="reName(table.type)"></h3>
        <br>
        <table class="table">
          <thead>
          <th>Артикул</th>
          <th>Наименование</th>
          <th>Цена, EUR</th>
          </thead>
          <tbody>
          <tr v-for="item in table.items" :key="item.art">
            <td>{{item.art}}</td>
            <td>{{item.label}}</td>
            <td>{{item.priceEur}}</td>
          </tr>
          </tbody>
        </table>


        <!--      <table class="table">-->
        <!--        <thead>-->
        <!--        <th>Артикул</th>-->
        <!--        <th>Наименование</th>-->
        <!--        <th>Тип</th>-->
        <!--        <th>Цена, EUR</th>-->
        <!--        </thead>-->
        <!--        <tbody>-->
        <!--        <tr v-for="item in dataBase" :key="item.art">-->
        <!--          <td>{{item.art}}</td>-->
        <!--          <td>{{item.label}}</td>-->
        <!--          <td>{{item.type}}</td>-->
        <!--          <td>{{item.priceEur}}</td>-->
        <!--        </tr>-->
        <!--        </tbody>-->
        <!--      </table>-->
      </div>

    </details>

  </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                showBase: false,
                dataBase2: [
                    {
                        type: 'nozhnitzy',
                        items: [
                            {art: 'LG12', type: 'nozhnitzy', label: 'Ножницы ПО 320-450 мм (LG12)', priceEur: 100},
                            {art: 'LG11', type: 'nozhnitzy', label: 'Ножницы ПО 450-650 мм (LG11 выводится, новый LG 11A) Kin long', priceEur: 100},
                            {art: 'N8C', type: 'nozhnitzy', label: 'Ножницы ПО 650-1600 мм (вместо N8B)', priceEur: 100},
                            {art: 'PDX-A', type: 'nozhnitzy', label: 'Вторые ножницы', priceEur: 100},
                        ]
                    },
                    {
                        type: 'petlyVisible',
                        items: [
                            {art: 'NDHA10A', type: 'petlyVisible', label: 'Петля ПО верхняя в европаз (90 кг) R/L Kin long [9005]', priceEur: 100},
                            {art: 'NDHA10B', type: 'petlyVisible', label: 'Петля ПО верхняя в европаз (90 кг) R/L Kin long [9005]', priceEur: 100},
                            {art: 'NDHB10B', type: 'petlyVisible', label: 'Петля ПО нижняя в европаз (90 кг) R/L Kin long [9005]', priceEur: 100},
                            {art: 'N2C-9005', type: 'petlyVisible', label: 'Поворотная петля до 90 кг черная RAL9005', priceEur: 100},
                        ]
                    },
                    {
                        type: 'petlyHidden',
                        items: [
                            {art: 'KLC3855L', type: 'petlyHidden', label: 'Комплект ПО скрытые петли левый 380-550', priceEur: 100},
                            {art: 'KLC3855R', type: 'petlyHidden', label: 'Комплект ПО скрытые петли правый 380-550', priceEur: 100},
                            {art: 'KLC55100L', type: 'petlyHidden', label: 'Комплект ПО скрытые петли левый 550-1000', priceEur: 100},
                            {art: 'KLC55100R', type: 'petlyHidden', label: 'Комплект ПО скрытые петли правый 550-1000', priceEur: 100},
                            {art: 'LYHE20-L', type: 'petlyHidden', label: 'Скрытая поворотная петля, нижняя, левая (до 90 кг.)', priceEur: 100},
                            {art: 'LYHE20-R', type: 'petlyHidden', label: 'Скрытая поворотная петля, нижняя, правая (до 90 кг.)', priceEur: 100},
                            {art: 'UP-YHE120-L', type: 'petlyHidden', label: 'Скрытая поворотная петля, нижняя, левая(до 110 кг.)', priceEur: 100},
                            {art: 'UP-YHE120-R', type: 'petlyHidden', label: 'Скрытая поворотная петля, нижняя, правая (до 110 кг.)', priceEur: 100},
                        ]
                    },
                    {
                        type: 'ugloviePeredachi',
                        items: [
                            {art: 'LZA4', type: 'ugloviePeredachi', label: 'Угловой переключатель 1Е, с блокиратором Kin long', priceEur: 100},
                            {art: 'LZB5', type: 'ugloviePeredachi', label: 'Угловая передача для установки снизу и со стороны петель', priceEur: 100},
                            {art: 'ZA2', type: 'ugloviePeredachi', label: 'Угловая передача (ZA2) (>)', priceEur: 100},
                            {art: 'ZB3', type: 'ugloviePeredachi', label: 'Уголок для поворотной створки прижим горизонт низ (не только на ТФ)', priceEur: 100},
                        ]
                    },
                    {
                        type: 'povorotnoOtkidnoi',
                        items: [
                            {art: 'N31', type: 'povorotnoOtkidnoi', label: 'Откидная планка (N31, выводится, новый LN57) Kin long', priceEur: 100},
                            {art: 'N50', type: 'povorotnoOtkidnoi', label: 'Откидной запор (шпингалет)  (N50, выводится, новый LN56) Kin long', priceEur: 100},
                            {art: 'LZCK05', type: 'povorotnoOtkidnoi', label: 'Ответная планка под откидной запор, с роликом  (не выводим, новый LZCK05) Kin long', priceEur: 100},
                         ]
                    },
                    {
                        type: 'tochkiPrizhima',
                        items: [
                            {art: 'N39', type: 'tochkiPrizhima', label: 'Концевая цапфа с креплением к тяге, с демпфером', priceEur: 100},
                            {art: 'HDS4', type: 'tochkiPrizhima', label: 'Цапфа в тягу Н=6 мм (HDS4)', priceEur: 100},
                            {art: 'ZA1-6A', type: 'tochkiPrizhima', label: 'Ответная планка, Н=6 мм', priceEur: 100},
                            {art: 'LSK72', type: 'tochkiPrizhima', label: 'Скрытый прижим скрытый (комплект- рама + створка) для скрытых петель', priceEur: 100},
                            {art: 'SK70', type: 'tochkiPrizhima', label: 'Скрытый прижим скрытый (комплект- рама + створка)', priceEur: 100},
                        ]
                    },
                    {
                        type: 'pripodnimateli',
                        items: [
                            {art: 'N33A', type: 'pripodnimateli', label: 'Подпятник на створку Kin long', priceEur: 100},
                            {art: 'N34A', type: 'pripodnimateli', label: 'Опора на поворотное окно (приподниматель)', priceEur: 100},
                        ]
                    },
                    {
                        type: 'ruchki',
                        items: [
                            {art: 'LFZS13-9005', type: 'ruchki', label: 'Ручка оконная для редуктора без розетки черная  RAL9005', priceEur: 100},
                            {art: 'LCDQ21', type: 'ruchki', label: 'Редуктор под ручку LFZS13, LFZS20 (под шестигранник) (выводится, новый LCDQ21A)', priceEur: 100},
                            {art: 'Y2CZS60-L24', type: 'ruchki', label: 'Ручка оконная, RAL9005, 104мм, без логотипа', priceEur: 100},
                            {art: 'N55', type: 'ruchki', label: 'Применик под ручку с демпфером Kin long', priceEur: 100},
                        ]
                    },
                    {
                        type: 'dopi',
                        items: [
                            {art: 'NDPX-2A', type: 'dopi', label: 'Фрамужные ножницы', priceEur: 100},
                        ]
                    },



                ],
                dataBase: [
                    {art: 'LG12', type: 'nozhnitzy', label: 'Ножницы ПО 320-450 мм (LG12)', priceEur: 100},
                    {art: 'LG11', type: 'nozhnitzy', label: 'Ножницы ПО 450-650 мм (LG11 выводится, новый LG 11A) Kin long', priceEur: 100},
                    {art: 'N8C', type: 'nozhnitzy', label: 'Ножницы ПО 650-1600 мм (вместо N8B)', priceEur: 100},
                    {art: 'PDX-A', type: 'nozhnitzy', label: 'Вторые ножницы', priceEur: 100},
                    {art: 'NDHA10A', type: 'petlyVisible', label: 'Петля ПО верхняя в европаз (90 кг) R/L Kin long [9005]', priceEur: 100},
                    {art: 'NDHA10B', type: 'petlyVisible', label: 'Петля ПО верхняя в европаз (90 кг) R/L Kin long [9005]', priceEur: 100},
                    {art: 'NDHB10B', type: 'petlyVisible', label: 'Петля ПО нижняя в европаз (90 кг) R/L Kin long [9005]', priceEur: 100},
                    {art: 'N2C-9005', type: 'petlyVisible', label: 'Поворотная петля до 90 кг черная RAL9005', priceEur: 100},
                    {art: 'KLC3855L', type: 'petlyHidden', label: 'Комплект ПО скрытые петли левый 380-550', priceEur: 100},
                    {art: 'KLC3855R', type: 'petlyHidden', label: 'Комплект ПО скрытые петли правый 380-550', priceEur: 100},
                    {art: 'KLC55100L', type: 'petlyHidden', label: 'Комплект ПО скрытые петли левый 550-1000', priceEur: 100},
                    {art: 'KLC55100R', type: 'petlyHidden', label: 'Комплект ПО скрытые петли правый 550-1000', priceEur: 100},
                    {art: 'LYHE20-L', type: 'petlyHidden', label: 'Скрытая поворотная петля, нижняя, левая (до 90 кг.)', priceEur: 100},
                    {art: 'LYHE20-R', type: 'petlyHidden', label: 'Скрытая поворотная петля, нижняя, правая (до 90 кг.)', priceEur: 100},
                    {art: 'UP-YHE120-L', type: 'petlyHidden', label: 'Скрытая поворотная петля, нижняя, левая(до 110 кг.)', priceEur: 100},
                    {art: 'UP-YHE120-R', type: 'petlyHidden', label: 'Скрытая поворотная петля, нижняя, правая (до 110 кг.)', priceEur: 100},
                ]
            }
        },
        computed: {
            // rename() {
            //
            // }
        },
        methods: {
            getResult() {
                this.getFormData;
            },
            getFormData() {

            },
            reName(name) {
                let s = '';
                switch (name) {
                    case "nozhnitzy":
                        s = "Ножницы";
                        break;
                    case "petlyVisible":
                        s = "Петли видимые";
                        break;
                    case "petlyHidden":
                        s = "Петли скрытые";
                        break;
                    case "ugloviePeredachi":
                        s = "Угловые передачи";
                        break;
                    case "povorotnoOtkidnoi":
                        s = "Поворотно-откидной механизм";
                        break;

                    case "tochkiPrizhima":
                        s = "Точки прижима";
                        break;
                    case "pripodnimateli":
                        s = "Приподниматели";
                        break;
                    case "ruchki":
                        s = "Ручки";
                        break;
                    case "dopi":
                        s = "Допы";
                        break;

                    default:
                        s = name;
                }
                return s;
            }
        }
    }
</script>

<style scoped>

</style>