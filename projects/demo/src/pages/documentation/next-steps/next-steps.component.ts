import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {DemoPath} from '@demo/constants';
import {TuiLinkModule} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'next-steps',
    imports: [RouterLinkActive, TuiLinkModule, RouterLink],
    templateUrl: './next-steps.template.html',
    styles: ['._hidden { display: none }'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NextStepsComponent {
    readonly maskExpressionDocPage = `/${DemoPath.MaskExpression}`;
    readonly processorsDocPage = `/${DemoPath.Processors}`;
    readonly pluginsDocPage = `/${DemoPath.Plugins}`;
    readonly overwriteModeDocPage = `/${DemoPath.OverwriteMode}`;
}
