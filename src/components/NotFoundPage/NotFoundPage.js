import "./NotFoundPage.css";
import {useNavigate} from "react-router-dom";


function NotFoundPage() {
    const navigation = useNavigate();

    function handelClick() {
        navigation(-1);
    }

    return (
            <section className="error-page">
                <h1 className="error-page__title">404</h1>
                <p className="error-page__subtitle">Страница не найдена</p>
                <button type="button" className="error-page__button" onClick={handelClick}>Назад</button>
            </section>
    );
}

export default NotFoundPage;
