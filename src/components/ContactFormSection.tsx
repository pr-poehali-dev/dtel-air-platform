import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function ContactFormSection() {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    phone: '',
    email: '',
    name: '',
    consent: false
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

  return (
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
  );
}
