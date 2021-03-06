/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { Demo2TestModule } from '../../../test.module';
import { GroupeDeleteDialogComponent } from 'app/entities/groupe/groupe-delete-dialog.component';
import { GroupeService } from 'app/entities/groupe/groupe.service';

describe('Component Tests', () => {
    describe('Groupe Management Delete Component', () => {
        let comp: GroupeDeleteDialogComponent;
        let fixture: ComponentFixture<GroupeDeleteDialogComponent>;
        let service: GroupeService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Demo2TestModule],
                declarations: [GroupeDeleteDialogComponent]
            })
                .overrideTemplate(GroupeDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(GroupeDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(GroupeService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
