import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePersonaje } from './create-personaje';

describe('CreatePersonaje', () => {
    let component: CreatePersonaje;
    let fixture: ComponentFixture<CreatePersonaje>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CreatePersonaje],
        }).compileComponents();

        fixture = TestBed.createComponent(CreatePersonaje);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
