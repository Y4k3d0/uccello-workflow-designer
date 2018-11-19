@extends('uccello::modules.default.edit.main')

@section('other-blocks')
<div class="card block">
	<div class="header">
		<h2>
			<div class="block-label-with-icon">

				{{-- Icon --}}
				<i class="material-icons">compare_arrows</i>

				{{-- Label --}}
				<span>{{ uctrans($module->name . '.single', $module) }}</span>
			</div>
		</h2>
	</div>
    <div class="body">
        <div class="row">
            <div class="col-md-12">
                <div id="paper">

				</div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('extra-script')
    {{ Html::script('vendor/uccello/workflow-designer/js/autoloader.js') }}
@endsection