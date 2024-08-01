// Импорт изображений
import companyImg3 from '../../../assets/img/worker.png';

// Импорт стилей
import '../../../assets/styles/main.css';


const InfoSection = () => {
  return (
    <section>
        <div className="container py-4">
            <div className="row d-flex flex-column align-items-center flex-lg-row">
                <div className="col-lg-6">
                    <h1 className="mb-3">&nbsp;О Компании</h1>
                    <p>Группа компаний Авиэль - крупная компания региона, занимающаяся организацией и контроля подора сотрудников.</p>
                    <p>Квалифицированные специалисты компании следят за каждым обращением на всех этапах - от резюме до выхода на работу.</p>
                    <p>Услуги нашей компании включают не только поиск вакансий, но и оказание помощи с документами, предоставление временного жилья и консультации по вопросам легализации работы. Мы стремимся облегчить процесс трудоустройства и адаптации наших клиентов, предоставляя полный спектр услуг.</p>
                    <p>Мы понимаем, что процесс адаптации может быть сложным и запутанным. наша команда экспертов готова помочь вам в каждом шаге этого пути, обеспечивая профессиональную поддержку и решая все ваш вопросы.</p>
                </div>
                <div className="col-lg-6">
                <img className="img-fluid" src={companyImg3} alt="Описание изображения" />
                  </div>
            </div>
        </div>
    </section>
  );
}

export default InfoSection;