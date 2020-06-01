import React from 'react';


    const EnglishOptions = ({language, category, changeLang, changeCat})=> {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="language-select">Language</label>
                    <select value={language}className="form-control" id="language-select" onChange={(e)=> changeLang(e.target.value)}>
                        <option value='en'>English</option>
                        <option value='es'>Español</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="category-select">Category</label>
                    <select value={category} className="form-control" id="category-select" onChange={(e)=> changeCat(e.target.value)}>
                        <option value='food'>Food</option>
                        <option value='supplies'>School Supplies</option>
                    </select>
                </div>
            </form>
        );
    }

    const SpanishOptions = ({language, category, changeLang, changeCat})=> {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="language-select">Idioma</label>
                    <select value={language} className="form-control" id="language-select" onChange={(e)=> changeLang(e.target.value)}>
                        <option value='en'>English</option>
                        <option value='es'>Español</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="category-select">Categoria</label>
                    <select value={category} className="form-control" id="category-select" onChange={(e)=> changeCat(e.target.value)}>
                        <option value='food'>Comida</option>
                        <option value='supplies'>Materiales en la Clase</option>
                    </select>
                </div>
            </form>
        );
    }

    const BilingualOptions = ({language, category, changeLang, changeCat}) => {
        return (
            <form>
                <div className="form-group">
        <label htmlFor="language-select">{language === 'en' ? 'Language' : 'Idioma'}</label>
                    <select value={language} className="form-control" id="language-select" onChange={(e)=> changeLang(e.target.value)}>
                        <option value='en'>English</option>
                        <option value='es'>Español</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="category-select">{language === 'en' ? 'Category' : 'Categoria'}</label>
                    <select value={category} className="form-control" id="category-select" onChange={(e)=> changeCat(e.target.value)}>
                        <option value='food'>{language === 'en' ? 'Food' : 'Comida'}</option>
                        <option value='supplies'>{language === 'en' ? 'Supplies' : 'Materiales'}</option>
                    </select>
                </div>
            </form>
        )
    }

export {EnglishOptions, SpanishOptions, BilingualOptions};