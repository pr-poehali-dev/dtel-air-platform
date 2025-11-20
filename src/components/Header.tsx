import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
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
  );
}
