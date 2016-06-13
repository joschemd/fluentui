import * as React from 'react';
import { Image } from '../../Image';
import { IChoiceGroupOption, IChoiceGroupProps } from './ChoiceGroup.Props';
import { css } from '../../utilities/css';
import './ChoiceGroup.scss';

export interface IChoiceGroupState {
  keyChecked: string;
}

let _instance = 0;

export class ChoiceGroup extends React.Component<IChoiceGroupProps, IChoiceGroupState> {
  public static defaultProps = {
    options: []
  };

  private _id: string;
  private _descriptionId: string;

  constructor(props: IChoiceGroupProps) {
    super();

    this.state = {
      keyChecked: this._getKeyChecked(props.options)
    };

    this._id = `ChoiceGroup-${ _instance++ }`;
    this._descriptionId = `ChoiceGroupDescription-${ _instance++ }`;
  }

  public componentWillReceiveProps(newProps: IChoiceGroupProps) {
    const newKeyChecked: string = this._getKeyChecked(newProps.options);
    const oldKeyCheched: string = this._getKeyChecked(this.props.options);

    if (newKeyChecked !== oldKeyCheched) {
      this.setState({
        keyChecked: newKeyChecked
      });
    }
  }

  public render() {
    let { label, options } = this.props;
    let { keyChecked } = this.state;

    return (
      // Need to assign role application on containing div because JAWS doesnt call OnKeyDown without this role
      <div role='application'>
        <div className='ms-ChoiceFieldGroup' role='radiogroup'  aria-labelledby={ this.props.label ? this._id + '-label' : '' }>
          <div className='ms-ChoiceFieldGroup-title'>
            { this.props.label ? <label className='ms-Label is-required' id={ this._id + '-label' }>{ label }</label> : null }
          </div>

          { options.map(option => (
            <div
              key={ option.key }
              className={ css('ms-ChoiceField', { 'ms-ChoiceField--image': !!option.imageSrc }) }
            >
              <input
                id={ `${this._id}-${option.key}` }
                className='ms-ChoiceField-input'
                type='radio'
                name={ this._id }
                disabled={ option.isDisabled }
                checked={ option.key === keyChecked }
                aria-checked={ option.key === keyChecked }
                onChange={ this._handleInputChange.bind(this, option) }
                aria-describedby={ `${this._descriptionId}-${option.key}` }
              />
              { this._renderField(option) }
            </div>
          )) }
        </div>
      </div>
    );
  }

  private _renderField(option: IChoiceGroupOption) {
    const { keyChecked } = this.state;

    return (
      <label
        htmlFor={ this._id + '-' + option.key }
        className={ option.imageSrc ? 'ms-ChoiceField-field--image' : 'ms-ChoiceField-field' }
      >
        {
          option.imageSrc
            ? <div className='ms-ChoiceField-innerField'>
                <div className={ css('ms-ChoiceField-imageWrapper', { 'is-hidden': option.key === keyChecked }) }>
                  <Image
                    src={ option.imageSrc }
                    alt='unselected'
                    width={ option.imageSize.width }
                    height={ option.imageSize.height }
                  />
                </div>
                <div className={ css('ms-ChoiceField-imageWrapper', { 'is-hidden': option.key !== keyChecked }) }>
                  <Image
                    src={ option.selectedImageSrc }
                    alt='selected'
                    width={ option.imageSize.width }
                    height={ option.imageSize.height }
                  />
                </div>
              </div>
            : null
        }
        {
          option.imageSrc
            ? <div className='ms-ChoiceField-labelWrapper'>
                <i className='ms-ChoiceField-icon ms-Icon ms-Icon--check' />
                <span id={ `${this._descriptionId}-${option.key}` } className='ms-Label'>{ option.text }</span>
              </div>
            : <span id={ `${this._descriptionId}-${option.key}` } className='ms-Label'>{ option.text }</span>
        }
      </label>
    );
  }

  private _handleInputChange(option: IChoiceGroupOption, evt: React.FormEvent) {
    let { onChanged } = this.props;

    this.setState({
      keyChecked: option.key
    });

    if (onChanged) {
      onChanged(option);
    }
  }

  /**
   * If all the isChecked property of options are falsy values, return undefined;
   * Else return the key of the first option with the truthy isChecked property.
   */
  private _getKeyChecked(options: IChoiceGroupOption[]): string {
    const optionsChecked = options.filter((option: IChoiceGroupOption) => {
      return option.isChecked;
    });

    if (optionsChecked.length === 0) {
      return undefined;
    } else {
      return optionsChecked[0].key;
    }
  }
}
