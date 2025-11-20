import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function ConnectionFormSection() {
  const { toast } = useToast();
  const [connectionForm, setConnectionForm] = useState({
    phone: '',
    address: '',
    comment: ''
  });

  const handleConnectionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Наш специалист свяжется с вами для уточнения деталей подключения'
    });
    setConnectionForm({ phone: '', address: '', comment: '' });
  };

  return (
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
  );
}
