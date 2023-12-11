import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtivoComponent } from './ativo.component';
import { ConsultaAtivoService } from '../../services/consulta-ativo.service';
import { HttpClientModule } from '@angular/common/http';

describe('AtivoComponent', () => {
  let component: AtivoComponent;
  let fixture: ComponentFixture<AtivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtivoComponent],
      imports: [HttpClientModule],
      providers: [ConsultaAtivoService],
    });

    fixture = TestBed.createComponent(AtivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
