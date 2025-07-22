import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="font-playfair font-bold text-lg text-forest-green tracking-wide">
                АКАДЕМИЯ ОТВЕТСТВЕННОГО КОНЕВЛАДЕЛЬЦА
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="font-source text-gray-700 hover:text-forest-green">Главная</a>
              <a href="#" className="font-source text-gray-700 hover:text-forest-green">Курсы</a>
              <a href="#" className="font-source text-gray-700 hover:text-forest-green">Преподаватели</a>
              <a href="#" className="font-source text-gray-700 hover:text-forest-green">Библиотека</a>
              <a href="#" className="font-source text-gray-700 hover:text-forest-green">Контакты</a>
            </div>
            <Button className="bg-forest-green hover:bg-green-800 text-white font-source">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-forest-green mb-6">
                Профессиональная <br />
                <span className="text-saddle-brown">ветеринария лошадей</span>
              </h1>
              <p className="font-source text-xl text-gray-600 mb-8 leading-relaxed">
                Изучайте ветеринарию и зоотехнию лошадей с ведущими специалистами. 
                Практические навыки, современные методики, интерактивные вебинары.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-forest-green hover:bg-green-800 text-white font-source px-8 py-3">
                  <Icon name="Play" className="mr-2 h-5 w-5" />
                  Начать обучение
                </Button>
                <Button variant="outline" size="lg" className="border-saddle-brown text-saddle-brown hover:bg-saddle-brown hover:text-white font-source px-8 py-3">
                  <Icon name="Calendar" className="mr-2 h-5 w-5" />
                  Записаться на вебинар
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/7ba23c64-35c3-4560-b167-9d8d51c7fce0.jpg" 
                alt="Ветеринарная академия" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-forest-green/10 p-3 rounded-full">
                    <Icon name="Users" className="h-6 w-6 text-forest-green" />
                  </div>
                  <div>
                    <p className="font-source font-semibold text-forest-green">1500+</p>
                    <p className="font-source text-sm text-gray-600">студентов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-forest-green mb-4">
              Наши курсы
            </h2>
            <p className="font-source text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексное образование от базовых знаний до специализированных навыков
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <CardHeader className="pb-4">
                <div className="bg-forest-green/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Heart" className="h-8 w-8 text-forest-green" />
                </div>
                <CardTitle className="font-playfair text-xl text-forest-green">
                  Ветеринария лошадей
                </CardTitle>
                <CardDescription className="font-source text-gray-600">
                  Диагностика, лечение и профилактика заболеваний. Практические навыки работы с лошадьми.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-source text-sm text-gray-500">12 недель</span>
                  <span className="font-source font-semibold text-saddle-brown">₽45,000</span>
                </div>
                <Button className="w-full bg-forest-green hover:bg-green-800 font-source">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <CardHeader className="pb-4">
                <div className="bg-saddle-brown/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Wheat" className="h-8 w-8 text-saddle-brown" />
                </div>
                <CardTitle className="font-playfair text-xl text-forest-green">
                  Зоотехния и кормление
                </CardTitle>
                <CardDescription className="font-source text-gray-600">
                  Разведение, селекция, кормление и содержание лошадей. Современные технологии.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-source text-sm text-gray-500">10 недель</span>
                  <span className="font-source font-semibold text-saddle-brown">₽38,000</span>
                </div>
                <Button className="w-full bg-forest-green hover:bg-green-800 font-source">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <CardHeader className="pb-4">
                <div className="bg-forest-green/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Video" className="h-8 w-8 text-forest-green" />
                </div>
                <CardTitle className="font-playfair text-xl text-forest-green">
                  Интерактивные вебинары
                </CardTitle>
                <CardDescription className="font-source text-gray-600">
                  Живое общение с экспертами, разбор клинических случаев, ответы на вопросы.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-source text-sm text-gray-500">Еженедельно</span>
                  <span className="font-source font-semibold text-saddle-brown">₽15,000</span>
                </div>
                <Button className="w-full bg-forest-green hover:bg-green-800 font-source">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-cream/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-playfair text-3xl font-bold text-forest-green mb-6">
                Почему выбирают нашу академию
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-forest-green/10 p-2 rounded-full">
                    <Icon name="Award" className="h-6 w-6 text-forest-green" />
                  </div>
                  <div>
                    <h4 className="font-source font-semibold text-lg text-forest-green mb-2">
                      Сертифицированные программы
                    </h4>
                    <p className="font-source text-gray-600">
                      Получите официальный сертификат по завершении курса
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-saddle-brown/10 p-2 rounded-full">
                    <Icon name="Users" className="h-6 w-6 text-saddle-brown" />
                  </div>
                  <div>
                    <h4 className="font-source font-semibold text-lg text-forest-green mb-2">
                      Опытные преподаватели
                    </h4>
                    <p className="font-source text-gray-600">
                      Практикующие ветеринары с многолетним опытом
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-forest-green/10 p-2 rounded-full">
                    <Icon name="BookOpen" className="h-6 w-6 text-forest-green" />
                  </div>
                  <div>
                    <h4 className="font-source font-semibold text-lg text-forest-green mb-2">
                      Богатая библиотека
                    </h4>
                    <p className="font-source text-gray-600">
                      Доступ к современным материалам и исследованиям
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="bg-gradient-to-br from-forest-green to-saddle-brown p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Icon name="Zap" className="h-12 w-12 text-white" />
                </div>
                <h4 className="font-playfair text-2xl font-bold text-forest-green mb-4">
                  Начните сегодня
                </h4>
                <p className="font-source text-gray-600 mb-6">
                  Присоединяйтесь к сообществу профессионалов
                </p>
                <Button size="lg" className="bg-gradient-to-r from-forest-green to-saddle-brown text-white font-source px-8">
                  Записаться на консультацию
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-green text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Heart" className="h-8 w-8 text-white mr-2" />
                <span className="font-playfair font-bold text-xl">
                  Академия ответственного коневладельца
                </span>
              </div>
              <p className="font-source text-gray-200">
                Профессиональное образование в области ветеринарии лошадей
              </p>
            </div>
            <div>
              <h5 className="font-playfair font-semibold text-lg mb-4">Курсы</h5>
              <ul className="font-source space-y-2 text-gray-200">
                <li><a href="#" className="hover:text-white">Ветеринария</a></li>
                <li><a href="#" className="hover:text-white">Зоотехния</a></li>
                <li><a href="#" className="hover:text-white">Вебинары</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-playfair font-semibold text-lg mb-4">О нас</h5>
              <ul className="font-source space-y-2 text-gray-200">
                <li><a href="#" className="hover:text-white">Преподаватели</a></li>
                <li><a href="#" className="hover:text-white">Библиотека</a></li>
                <li><a href="#" className="hover:text-white">Сертификаты</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-playfair font-semibold text-lg mb-4">Контакты</h5>
              <div className="font-source space-y-2 text-gray-200">
                <p>info@vet-academy.ru</p>
                <p>+7 (495) 123-45-67</p>
                <p>Москва, ул. Ветеринарная, 12</p>
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center">
            <p className="font-source text-gray-200">
              © 2024 Ветеринарная Академия. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;