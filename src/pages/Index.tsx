import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const tariffs = [
  {
    id: 'free',
    name: 'Бесплатный тест',
    duration: '1-15 минут',
    price: 'Бесплатно',
    description: 'С рекламой',
    icon: 'Wifi',
    color: 'text-primary',
    features: ['Базовая скорость', 'Рекламные блоки', 'До 15 минут доступа']
  },
  {
    id: '15min',
    name: '15 минут',
    duration: '15 минут',
    price: '29 ₽',
    description: 'Без рекламы',
    icon: 'Zap',
    color: 'text-secondary',
    features: ['Высокая скорость', 'Без рекламы', 'Мгновенный доступ']
  },
  {
    id: '1hour',
    name: '1 час',
    duration: '60 минут',
    price: '79 ₽',
    description: 'Оптимально',
    icon: 'Clock',
    color: 'text-primary',
    popular: true,
    features: ['Высокая скорость', 'Без рекламы', 'Приоритетное подключение']
  },
  {
    id: '1day',
    name: 'Сутки',
    duration: '24 часа',
    price: '199 ₽',
    description: 'Выгодно',
    icon: 'Calendar',
    color: 'text-secondary',
    features: ['Максимальная скорость', 'Без рекламы', 'Техподдержка 24/7']
  },
  {
    id: '1month',
    name: 'Месяц',
    duration: '30 дней',
    price: '999 ₽',
    description: 'Лучшая цена',
    icon: 'TrendingUp',
    color: 'text-primary',
    features: ['Максимальная скорость', 'Приоритет в сети', 'VIP поддержка', 'Статистика использования']
  }
];

export default function Index() {
  const { toast } = useToast();
  const [selectedTariff, setSelectedTariff] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({
    phone: '',
    email: '',
    name: '',
    consent: false
  });
  const [connectionForm, setConnectionForm] = useState({
    phone: '',
    address: '',
    comment: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.consent) {
      toast({
        title: 'Требуется согласие',
        description: 'Подтвердите согласие на обработку данных',
        variant: 'destructive'
      });
      return;
    }
    toast({
      title: 'Контакты сохранены!',
      description: 'Мы свяжемся с вами в ближайшее время'
    });
    setContactForm({ phone: '', email: '', name: '', consent: false });
  };

  const handleConnectionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Наш специалист свяжется с вами для уточнения деталей подключения'
    });
    setConnectionForm({ phone: '', address: '', comment: '' });
  };

  const handleTariffSelect = (tariffId: string) => {
    setSelectedTariff(tariffId);
    const tariff = tariffs.find(t => t.id === tariffId);
    toast({
      title: 'Тариф выбран',
      description: `Подключаем: ${tariff?.name} — ${tariff?.price}`
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Wifi" size={32} className="text-primary wifi-wave" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">DTel Air</h1>
              <p className="text-xs text-muted-foreground">Умная Wi-Fi платформа</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#platform" className="text-sm hover:text-primary transition-colors">О платформе</a>
            <a href="#tariffs" className="text-sm hover:text-primary transition-colors">Тарифы</a>
            <a href="#connect" className="text-sm hover:text-primary transition-colors">Подключение</a>
            <a href="#contacts" className="text-sm hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button size="sm" className="hidden md:flex">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

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

      <section id="tariffs" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Icon name="Zap" size={14} className="mr-1.5" />
              Тарифы
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Выберите свой тариф</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              От бесплатного теста до полноценного месячного доступа
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {tariffs.map((tariff) => (
              <Card 
                key={tariff.id}
                className={`relative transition-all hover:shadow-xl cursor-pointer ${
                  tariff.popular ? 'border-primary shadow-lg shadow-primary/20 scale-105' : 'hover:border-primary/40'
                } ${selectedTariff === tariff.id ? 'ring-2 ring-primary' : ''}`}
                onClick={() => handleTariffSelect(tariff.id)}
              >
                {tariff.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={tariff.icon as any} size={28} className={tariff.color} />
                  </div>
                  <CardTitle className="text-xl">{tariff.name}</CardTitle>
                  <CardDescription>{tariff.description}</CardDescription>
                  <div className="pt-4">
                    <div className="text-3xl font-bold text-foreground">{tariff.price}</div>
                    <div className="text-sm text-muted-foreground">{tariff.duration}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tariff.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6" 
                    variant={tariff.popular ? 'default' : 'outline'}
                  >
                    {tariff.id === 'free' ? 'Попробовать' : 'Выбрать'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <Icon name="UserPlus" size={14} className="mr-1.5" />
                Контакты
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Оставьте свои контакты</h3>
              <p className="text-muted-foreground text-lg">
                Получайте спецпредложения и новости DTel Air
              </p>
            </div>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Форма регистрации</CardTitle>
                <CardDescription>Заполните данные для получения доступа к сети</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Ваше имя"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    />
                  </div>

                  <div className="flex items-start gap-2 pt-2">
                    <Checkbox
                      id="consent"
                      checked={contactForm.consent}
                      onCheckedChange={(checked) => 
                        setContactForm({ ...contactForm, consent: checked as boolean })
                      }
                    />
                    <Label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
                      Согласен на обработку персональных данных и получение рассылки
                    </Label>
                  </div>

                  <Button type="submit" className="w-full">
                    <Icon name="Send" size={16} className="mr-2" />
                    Получить доступ
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="connect" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <Icon name="Home" size={14} className="mr-1.5" />
                Подключение
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Подключите DTel у себя дома</h3>
              <p className="text-muted-foreground text-lg">
                Оставьте заявку, и наш специалист свяжется с вами
              </p>
            </div>

            <Card className="border-secondary/20">
              <CardHeader>
                <CardTitle>Заявка на подключение</CardTitle>
                <CardDescription>Проводной интернет от DTel — стабильное соединение и высокая скорость</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleConnectionSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="conn-phone">Телефон *</Label>
                    <Input
                      id="conn-phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={connectionForm.phone}
                      onChange={(e) => setConnectionForm({ ...connectionForm, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Адрес подключения *</Label>
                    <Input
                      id="address"
                      type="text"
                      placeholder="Город, улица, дом, квартира"
                      value={connectionForm.address}
                      onChange={(e) => setConnectionForm({ ...connectionForm, address: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comment">Комментарий</Label>
                    <Textarea
                      id="comment"
                      placeholder="Укажите удобное время для звонка или дополнительную информацию"
                      value={connectionForm.comment}
                      onChange={(e) => setConnectionForm({ ...connectionForm, comment: e.target.value })}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Rocket" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
