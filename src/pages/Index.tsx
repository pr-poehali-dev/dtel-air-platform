import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import TariffsSection from '@/components/TariffsSection';
import ContactFormSection from '@/components/ContactFormSection';
import ConnectionFormSection from '@/components/ConnectionFormSection';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-1.5">
              <Icon name="Sparkles" size={14} className="mr-1.5" />
              Captive Portal нового поколения
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text text-transparent">
              DTel Air — интеллектуальная Wi-Fi платформа
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Превратите обычные точки доступа в инструмент продаж, сбора клиентов и продвижения бренда
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Icon name="Wifi" size={20} />
                Подключиться к Wi-Fi
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Play" size={20} />
                Как это работает
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <Icon name="Cpu" size={14} className="mr-1.5" />
                Технология
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Что видит клиент при подключении</h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Современная страница входа работает на любом устройстве — телефон, ноутбук, планшет
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Timer" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Бесплатный тест</CardTitle>
                  <CardDescription>1-15 минут доступа с рекламой</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-secondary/20 hover:border-secondary/40 transition-all hover:shadow-lg hover:shadow-secondary/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon name="CreditCard" size={24} className="text-secondary" />
                  </div>
                  <CardTitle>Платные тарифы</CardTitle>
                  <CardDescription>От 15 минут до месяца</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Target" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Рекламные блоки</CardTitle>
                  <CardDescription>Промо DTel и партнёров</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-secondary/20 hover:border-secondary/40 transition-all hover:shadow-lg hover:shadow-secondary/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon name="UserPlus" size={24} className="text-secondary" />
                  </div>
                  <CardTitle>Сбор контактов</CardTitle>
                  <CardDescription>Телефон, email, имя клиента</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Home" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Заявка на интернет</CardTitle>
                  <CardDescription>Подключение DTel у себя дома</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-secondary/20 hover:border-secondary/40 transition-all hover:shadow-lg hover:shadow-secondary/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon name="BarChart3" size={24} className="text-secondary" />
                  </div>
                  <CardTitle>Аналитика</CardTitle>
                  <CardDescription>Статистика подключений</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <TariffsSection />

      <ContactFormSection />

      <ConnectionFormSection />

      <footer className="border-t border-border py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wifi" size={28} className="text-primary" />
                <span className="font-bold text-lg">DTel Air</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Интеллектуальная Wi-Fi платформа нового поколения
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Платформа</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#platform" className="hover:text-primary transition-colors">О технологии</a></li>
                <li><a href="#tariffs" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Для бизнеса</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Связь</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-primary" />
                  <span>8 (800) 555-35-35</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-primary" />
                  <span>info@dtel.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Globe" size={16} className="text-primary" />
                  <span>dtel-air.ru</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 DTel Air. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
