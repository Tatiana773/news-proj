const initialState = {
    news: [
        {
            id: 1, 
            title: 'Парламент Естонії ухвалив заяву на підтримку України', 
            categoryId: '31', 
            body: 'Парламент Естонії ухвалив заяву на підтримку України....'
        },
        {
            id: 2, 
            title: 'ЗСУ не вигідно просто зараз бігти в контрнаступ, - військовий оглядач назвав причину', 
            categoryId: '32', 
            body: 'ЗСУ не вигідно просто зараз бігти в контрнаступ, - військовий оглядач назвав причину....'
        },
        {
            id: 3, 
            title: 'Індія проти обговорення на зустрічі G20 додаткових санкцій проти росії - Reuters', 
            categoryId: '33', 
            body: 'Індія проти обговорення на зустрічі G20 додаткових санкцій проти росії - Reuters....'
        },
        {
            id: 4, 
            title: 'Федоров розповів, скільки в Україні зареєстровано ФОП та ТОВ після повномасштабного вторгнення', 
            categoryId: '34', 
            body: 'Федоров розповів, скільки в Україні зареєстровано ФОП та ТОВ після повномасштабного вторгнення....'
        },
        {
            id: 5, 
            title: 'Росіяни обстріляли Курахове касетними боєприпасами', 
            categoryId: '32', 
            body: 'Росіяни обстріляли Курахове касетними боєприпасами....'
        },
        {
            id: 6, 
            title: 'Шольц продовжить телефонувати Путіну попри відсутність результатів ', 
            categoryId: '33', 
            body: 'Шольц продовжить телефонувати Путіну попри відсутність результатів ....'
        },
        {
            id: 7, 
            title: 'Перший обстріл ТЕС ДТЕК відбувся за три дні до початку повномасштабної війни', 
            categoryId: '34', 
            body: 'Перший обстріл ТЕС ДТЕК відбувся за три дні до початку повномасштабної війни....'
        },
        {
            id: 8, 
            title: 'Потрібно допомогти Україні перемогти, а потім не дати історії повторитися, - генсек НАТО', 
            categoryId: '31', 
            body: 'Потрібно допомогти Україні перемогти, а потім не дати історії повторитися, - генсек НАТО....'
        },
        {
            id: 9, 
            title: 'Динамо цікавилось екс-гравцями Барселони, МЮ та ПСЖ', 
            categoryId: '35', 
            body: 'Динамо цікавилось екс-гравцями Барселони, МЮ та ПСЖ....'
        },
        {
            id: 10, 
            title: 'Новий наступ росії розпочався на 4−5 напрямках — ГУР', 
            categoryId: '32', 
            body: 'Новий наступ росії розпочався на 4−5 напрямках — ГУР....'
        },
        {
            id: 11, 
            title: 'Вчені відкрили ще одне ядро всередині Землі завдяки землетрусам', 
            categoryId: '36', 
            body: 'Вчені відкрили ще одне ядро всередині Землі завдяки землетрусам....'
        },
        {
            id: 12, 
            title: '«Київ-Баскет» обіграв «Черкаські Мавпи» у матчі пам’яті фаната киян, який віддав своє життя за Україну', 
            categoryId: '35', 
            body: '«Київ-Баскет» обіграв «Черкаські Мавпи» у матчі пам’яті фаната киян, який віддав своє життя за Україну....'
        },
        {
            id: 13, 
            title: 'В Україні оцінили збитки, завдані навколишньому середовищу', 
            categoryId: '34', 
            body: 'В Україні оцінили збитки, завдані навколишньому середовищу....'
        },
        {
            id: 14, 
            title: '"Бухарестська дев’ятка" обговорить подальшу підтримку України, - Дуда', 
            categoryId: '33', 
            body: '"Бухарестська дев’ятка" обговорить подальшу підтримку України, - Дуда....'
        },
        {
            id: 15, 
            title: 'Литва пропонує створити центр контролю за дотриманням санкцій щодо рф та білорусі', 
            categoryId: '33', 
            body: 'Литва пропонує створити центр контролю за дотриманням санкцій щодо рф та білорусі....'
        },
    ]
    
}

export const newsReducer = (state = initialState, action) =>{
    switch(action.type){
        
        default: return state;
    }

}