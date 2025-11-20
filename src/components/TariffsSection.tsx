import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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

export default function TariffsSection() {
  const { toast } = useToast();
  const [selectedTariff, setSelectedTariff] = useState<string | null>(null);

  const handleTariffSelect = (tariffId: string) => {
    setSelectedTariff(tariffId);
    const tariff = tariffs.find(t => t.id === tariffId);
    toast({
      title: 'Тариф выбран',
      description: `Подключаем: ${tariff?.name} — ${tariff?.price}`
    });
  };

  return (
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
  );
}
